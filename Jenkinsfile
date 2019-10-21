pipeline {
    agent { docker { image 'node:10-alpine' } }
    stages {
        stage('test') {
            steps {
                sh 'npm --version'
                sh 'npm test'
            }
        }
        stage('Deploy production') {
            when { buildingTag() }
            steps {
                withCredentials([file(credentialsId: '3bede204-9776-4ed3-98a5-dc6cef958b28', variable: 'NPM_FILE')]) {
                    sh 'npm --userconfig=$NPM_FILE publish --access public'
                }
            }
        }
        stage('Deploy beta') {
            when { branch 'master' }
            steps {    
                withCredentials([file(credentialsId: '3bede204-9776-4ed3-98a5-dc6cef958b28', variable: 'NPM_FILE')]) {
		    sh 'npm version prerelease'
                    sh 'npm --userconfig=$NPM_FILE publish --access public --tag beta'
                }
            }
        }
        stage('Deploy alpha') {
            when { branch 'develop' }
            steps {
                withCredentials([file(credentialsId: '3bede204-9776-4ed3-98a5-dc6cef958b28', variable: 'NPM_FILE')]) {
		    sh 'npm version prerelease'
                    sh 'npm --userconfig=$NPM_FILE publish --access public --tag alpha'
                }
            }
        }
    }
}
