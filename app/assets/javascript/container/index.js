import Header from '../components/common/header.js';

const Container = React.createClass({
    render () {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    },
});

export default Container;
