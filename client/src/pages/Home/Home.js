import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    player: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container fluid>
        <Row fluid>
          <div className="col-md-6 offset-md-3"
               style={{
                 paddingTop: 120,
                 paddingBottom: 120,
                 textAlign: "center",
                 color: "white"
               }}
            >
              <h1>Check NFL Player's Stats</h1>
          </div>
          <div className="col-md-6 offset-md-3">
            <form>
              <Input
                value={this.state.player}
                onChange={this.handleInputChange}
                name="player"
                placeholder="Player Name (required)"
              />
              <FormBtn
                disabled={!(this.state.player)}
                // onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </div>
        </Row>
        <Row fluid>

        </Row>
      </Container>
    );
  }
}

export default Home;
