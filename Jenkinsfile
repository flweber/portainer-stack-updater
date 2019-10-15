pipeline {
    agent { docker { image 'node:10-alpine' } }
    stages {
        stage('test') {
            steps {
                sh 'npm --version'
                sh 'npm test'
            }
        }
        stage('build') {
            when { buildingTag() }
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy production') {
            when { buildingTag() }
            steps {
                withCredentials([file(credentialsId: '0a45fe2b-022d-436b-a9c3-9bd053e9866f', variable: 'NPM_FILE')]) {
                    sh 'npm --userconfig=$NPM_FILE publish --access public'
                }
            }
        }
        stage('Deploy beta') {
            when { branch 'master' }
            steps {
                withCredentials([file(credentialsId: '0a45fe2b-022d-436b-a9c3-9bd053e9866f', variable: 'NPM_FILE')]) {
                    sh 'npm --userconfig=$NPM_FILE publish --access public --tag beta'
                }
            }
        }
        stage('Deploy alpha') {
            when { branch 'master' }
            steps {
                withCredentials([file(credentialsId: '0a45fe2b-022d-436b-a9c3-9bd053e9866f', variable: 'NPM_FILE')]) {
                    sh 'npm --userconfig=$NPM_FILE publish --access public --tag alpha'
                }
            }
        }
    }
}