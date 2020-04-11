def remote = [:]
remote.name = "goodvardHost"
remote.host = "176.99.11.66"
remote.allowAnyHosts = true

node {
    stage('Git clone') {
        git 'https://github.com/slav9n4ik/GoodVard.git'
        sh 'ls -la'
    }
   
    stage('Docker build and push') {
        withCredentials([usernamePassword(credentialsId: 'docker-login', passwordVariable: 'password', usernameVariable: 'userName')]) {
            sh "docker login --username ${userName} --password ${password}"
            sh "docker build . -t slav9n4ik/goodvard:latest"
            sh "docker push slav9n4ik/goodvard:latest"
        }
    }

    stage('Start containers') {
        withCredentials([usernamePassword(credentialsId: 'goodvard-host', passwordVariable: 'password', usernameVariable: 'userName')]) {
            remote.user = userName
            remote.password = password

            sshScript remote: remote, script: 'start.sh'
        }
    }
}