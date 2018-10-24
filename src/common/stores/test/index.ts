import { observable, action, computed } from 'mobx'

export class Store {

  @observable
  public userInfo = {
    username: '',
    password: '',
    token: '',
    logged: true,
  }

  @computed get userAllname(): any {
    return this.userInfo.username + this.userInfo.password
  }

  @action
  public setToken(token: string): any {
    this.userInfo.token = token
    this.userInfo.logged = true
  }

  @action
  public removeToekn(): any {
    this.userInfo.token = ''
    this.userInfo.logged = false
  }
}

export default new Store()
