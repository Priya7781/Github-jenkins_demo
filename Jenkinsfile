pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t playwright-jenkins-demo .'
            }
        }

        stage('Run Playwright Tests in Docker') {
            steps {
                bat 'docker run --rm -e CI=true -v "%cd%\\playwright-report:/app/playwright-report" playwright-jenkins-demo'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: true
            ])

            archiveArtifacts artifacts: 'playwright-report/**/*', fingerprint: true
        }
    }
}