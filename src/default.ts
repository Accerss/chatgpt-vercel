export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 由 [@ourongxing](https://github.com/ourongxing) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
- 如果本项目对你有所帮助，请点击[更多功能](https://gwzone.cn/about)。
- <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行。开头输入 <kbd>/</kbd> 或者 <kbd>空格</kbd> 搜索 Prompt 预设。点击输入框滚动到底部。`

export const myMessage = `
以下是我定义好的服务任务name和对应类的实现flowable:class，这些服务任务与flowable:class绑定才能使用，请记住在flowable业务流程你只能用我提供的服务任务。

| name           | flowable:class                                            |
| -------------- | --------------------------------------------------------- |
| 导航去客厅     | org.flowable.ui.task.application.Servicetask.GoLivingRoom |
| 导航去厨房     |                                                           |
| 导航去卧室     |                                                           |
| 打开客厅的灯   | org.flowable.ui.task.application.Servicetask.OpenLight    |
| 关闭客厅的灯   | org.flowable.ui.task.application.Servicetask.CloseLight   |
| 打开客厅的窗帘 | org.flowable.ui.task.application.Servicetask.OpenCurtain  |
| 关闭客厅的窗帘 | org.flowable.ui.task.application.Servicetask.CloseLight   |
| 控制卧室的风扇 | org.flowable.ui.task.application.Servicetask.WelTeacher   |

下面我会告诉你我的具体需求，用我提供的服务任务构造业务流程，你可以做到吗。
`
