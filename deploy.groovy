def remote = [:]
remote.name = "goodvardHost"
remote.host = "176.99.11.66"
remote.allowAnyHosts = true

node {
    stage('Git clone') {
        git 'https://github.com/slav9n4ik/GoodVard.git'
        sh 'ls -la'
    }

    stage('Prepare Configs') {
        dir('goodvard/') {
            withCredentials([usernamePassword(credentialsId: 'mail-id', passwordVariable: 'password', usernameVariable: 'userName')]) {
                sh "ls -la"
                def configFilePath = "mail-config.js"
                def configFile = readFile configFilePath
                configFile = configFile.replaceAll("\\#PASSWORD#", password)
                sh "rm ${configFilePath}"
                sh "echo \"${configFile}\" > ${configFilePath}"
            }
        }
    }
   
    stage('Docker build and push') {
        withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'password', usernameVariable: 'userName')]) {
            sh "docker login --username ${userName} --password ${password}"
            sh "docker build . -t slav9n4ik/goodvard:latest"
//             sh "docker push slav9n4ik/goodvard:latest"
            sh "docker save -o goodvard-image.tar slav9n4ik/goodvard:latest"
        }
    }

    // stage('Copy image') {
    //     withCredentials([usernamePassword(credentialsId: 'goodvard-host', passwordVariable: 'password', usernameVariable: 'userName')]) {
    //         sh "scp root@176.99.11.66:/opt/goodvard-image.tar goodvard-image.tar"
    //         sh "expect \"root@176.99.11.66's password: \""
    //         sh "send ${password}"
    //     }
    // }

    stage('Start containers') {
        withCredentials([usernamePassword(credentialsId: 'goodvard-host', passwordVariable: 'password', usernameVariable: 'userName')]) {
            remote.user = userName
            remote.password = password
            sshPut remote: remote, from: 'goodvard-image.tar', into: '/opt/'
            sshScript remote: remote, script: 'start.sh'
        }
    }
}