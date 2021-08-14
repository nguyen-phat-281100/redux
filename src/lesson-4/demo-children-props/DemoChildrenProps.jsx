import React, { Component } from 'react'
import Button from './Button'

export default class DemoChildrenProps extends Component {
    render() {
        return (
            <div>
                {/* children props: truyền nội dung giữa 2 thẻ đóng mở */}
                <Button>Login</Button>
                <Button>Register</Button>
                <Button>View detail</Button>
                <Button>Add to cart</Button>
            </div>
        )
    }
}
