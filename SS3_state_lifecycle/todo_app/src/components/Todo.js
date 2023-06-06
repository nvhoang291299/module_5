const { Component } = require("react");
const { works } = require("../data/data");

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      work: "",
      listWork: works,
    };
  }

    handleInput = (e) =>{
        this.setState({
            work: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            work: '',
            listWork: [this.state.work, ...this.state.listWork]
        })
    }

  render() {
    return (
      <>
        <div className="container">
            <div className="row">
            <div className="col-auto">
            <input
                type="text"
                className="form-control"
                placeholder="enter your work..."
                value={this.state.work}
                onChange={(e) => {this.handleInput(e)}}
            />
            </div>
            <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3" onClick={() => {this.handleClick()}}>
                Add
            </button>
            </div>
            </div>
            <div>
                <ul>
                    {
                        this.state.listWork.map((work, index) => {
                            return (
                                <li>{work}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
      </>
    );
  }
}

export default Todo;