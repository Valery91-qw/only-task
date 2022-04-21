const users = [
    {login: 'steve.jobs@example.com', password: 'password'}
]

interface ISingInData {
    login: string
    password: string
}

const mockAPI = {
    singIn(singInData: ISingInData): Promise<string> {
        return new Promise((resolve, reject) => {
            const user = users.find(
                user => user.login === singInData.login && user.password === singInData.password
            )
            if(user) {
                setTimeout(() => {
                    resolve('200')
                }, 3000)
            } else {
                setTimeout(() => {
                    reject('404')
                }, 3000)
            }
        })
    }
}

export default mockAPI;