pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                echo 'Retrieving dependencies..'
				sh 'npm install'
                echo 'Installation completed successfully.'
            }
        }
        stage('Build') {
            steps {
                echo 'Building project..'
				sh 'npm run build'
                echo 'Build completed successfully.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
				echo 'No tests implemented yet: skipping tests.'
            }
        }
        stage('Docker image') {
            steps {
                echo 'Building docker image..'
				echo 'building new image'
				sh 'docker build -t jazzhands-backoffice .'
				echo 'Image built successfully.'
				echo 'Removing outdated container...'
				sh 'docker rm -f container jazzhands-backoffice'
				echo 'starting new container'
				sh 'docker run -d --name jazzhands-backoffice -p 1340:1337 jazzhands-backoffice:latest'
            }
        }
    }
}