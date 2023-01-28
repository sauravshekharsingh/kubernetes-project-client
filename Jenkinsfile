pipeline {
    agent any
    stages {
        stage('Code Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sauravshekharsingh/kubernetes-project-client.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install @material-ui/core'
		        bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'	
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
    }
}