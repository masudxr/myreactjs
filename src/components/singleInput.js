import React from 'react';

class Appp extends React.Component {
    state = {
      post: {
        name: "",
        description: ""
      },
      jobs: []
    };
  
    handleChange = e => {
      const { name, value } = e.target;
  
      this.setState(prevState => ({
        post: { ...prevState.post, [name]: value }
      }));
    };
  
    handleSubmit = e => {
      e.preventDefault();
  
      this.setState(prevState => ({
        jobs: [...prevState.jobs, prevState.post],
        post: { name: "", description: "" }
      }));
    };
  
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <form>
            <input
              name="name"
              onChange={this.handleChange}
              type="text"
              value={this.state.post}
              placeholder="post name"
            />
            <input
              name="description"
              onChange={this.handleChange}
              type="text"
              value={this.state.post}
              placeholder="post description"
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <ul>
            {this.state.jobs.map((job, index) => (
              <li key={index}>
                {job.name}: {job.description}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
export default Appp;