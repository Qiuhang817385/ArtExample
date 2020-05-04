import * as React from 'react'
interface HelloProps {
  compiler: string
  framework: string
}

export const Hello = (props: HelloProps) => (
  <h1>
    hello from{props.compiler} and {props.framework}
  </h1>
)
export const HelloFun: React.FC<HelloProps> = (props) => (
  <h1>
    hello from{props.compiler} and {props.framework}
  </h1>
)
export class HelloClass extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    )
  }
}
