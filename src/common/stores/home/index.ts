import { observable, action, computed } from 'mobx'

export class Store {

  @observable
  public home = {
    title: '',
    count: 0,
  }

  @computed get title(): string {
    return this.home.title
  }

  @computed get count(): number {
    return this.home.count
  }

  @action
  public addCount(count?: number): void {
    if (count) {
      this.home.count = count
    } else {
      this.home.count += 1
    }
  }

  @action
  public setCount(count?: number): void {
    if (count) {
      this.home.count = count
    }
  }
}

export default new Store()
