import React, {Component} from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';
import '../../scss/components/Assignment_1/_app.scss';

class App extends Component {
    state = {
        username: 'Benjamin'
    };

    render() {
        return (
            <div className='app'>
                <UserInput
                    username={this.state.username}
                    changed={this.changeInputHandler}
                />
                <UserOutput
                    username={this.state.username}
                />
                <UserOutput
                    username={this.state.username}
                />
                <UserOutput
                    username={this.state.username}
                />
            </div>
        );
    }

    changeInputHandler = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        );
    }
}

export default App;
