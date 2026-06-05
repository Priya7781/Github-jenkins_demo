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
                script {
                    dockerImage = docker.build("playwright-jenkins-demo")
                }
            }
        }

        stage('Run Playwright Tests in Docker') {
            steps {
                script {
                    dockerImage.inside("-e CI=true -v \"${env.WORKSPACE}\\playwright-report:/app/playwright-report\"") {
                        bat 'npx playwright test'
                    }
                }
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