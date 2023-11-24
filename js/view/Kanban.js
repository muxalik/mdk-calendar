import Column from './Column.js'

export default class Kanban {
  constructor(root) {
    this.root = root

    Kanban.columns().forEach((column) => {
      const columnView = new Column(column.id, column.title)

      this.root.appendChild(columnView.elements.root)
    })
  }

  static columns() {
    return [
      {
        id: 1,
        title: new Date().getDay() + '.' + new Date().getMonth(),
      },
      {
        id: 2,
        title: new Date().getDay() + 1 + '.' + new Date().getMonth(),
      },
      {
        id: 3,
        title: new Date().getDay() + 2 + '.' + new Date().getMonth(),
      },
    ]
  }
}
