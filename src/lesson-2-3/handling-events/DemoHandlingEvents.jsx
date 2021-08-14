import React, { Component } from 'react'

export default class DemoHandlingEvents extends Component {
    // Hàm không có tham số
    greeting = () => {
        alert('Welcome to this page!');
    }

    // Hàm có tham số
    subscribe = (username) => {
        alert(`Thanks ${username} for subscribing!`)
    }

    render() {
        return (
            <div className="text-center mt-5">
                <h1 className="mb-4">Handling Events</h1>
                
                {/* Gọi hàm không có tham số */}
                <button className="btn btn-success" onClick={this.greeting}>Click me</button>

                {/* Gọi hàm có tham số, phải truyền thêm vào một callback func */}
                <button className="btn btn-danger" onClick={() => this.subscribe('taych')}>Subscribe</button>
            </div>
        )
    }
}

