import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image, Grid, Icon, Header, Flag, Label } from "semantic-ui-react";
import "../css/main.css";


class ButtonAddToCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: false
    };

    this.activateAnimation();
  }

  activateAnimation() {
    setTimeout(
      this.setState({ animated: true })
      , 2000);

    setTimeout(
      console.log(this.state.animated)
      , 8000);
  }

  render() {
    let { btnText, btnColor, handleClickOrder } = this.props;
    console.log(this.state.animated);
    return (
      <Button basic color={btnColor} animated='false' onClick={handleClickOrder}>
        <Button.Content hidden>{btnText}</Button.Content>
        <Button.Content visible>
          <Icon name='shop' />
        </Button.Content>
      </Button>
    );
  }
}
class ItemComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemType: props.itemType[0].toUpperCase() + props.itemType.slice(1),
      category: props.category.slice(0, 3),
      tag: props.tag.slice(0, 3),
      country: props.country.slice(0, 3),
      region: props.region.slice(0, 3),
      ordred: props.ordred,
      inFavorite: props.inFavorite
    };

    this.handleClickOrder = this.handleClickOrder.bind(this);
    this.handleClickfavorite = this.handleClickfavorite.bind(this);
  }

  handleClickOrder(){
    this.setState({ ordred: !this.state.ordred });
  }

  handleClickfavorite(){
    this.setState({ inFavorite: !this.state.inFavorite });
  }

  render() {
    let icon = "search";
    if(this.props.itemType === "product"){
      icon = "cubes";
    }else if(this.props.itemType === "service"){
      icon = "wrench";
    }
    //this is a test
    return (
      <div>
        <Card fluid>
          <Card.Content>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={11}>
                  <Image
                    floated='left'
                    label={{ as: "a", color: "black", content: this.state.itemType, icon: icon, ribbon: true }}
                    size='small'
                    src={this.props.img}
                  />
                  <Card.Header>
                    <Header as='h3'>{this.props.title}</Header>
                  </Card.Header>
                  <Card.Meta>
                    {this.state.category.toString()} <br />
                    <Flag name={this.state.country[0]} /> {this.state.region.toString()} <br />
                  </Card.Meta>
                  <Card.Description className="clearNone">
                    {this.props.short_desc}
                  </Card.Description>
                </Grid.Column>
                <Grid.Column width={5} textAlign="right">
                  <div>
                    {
                      this.state.tag.map((item, key) => (
                        <Label as='a' color='blue' tag key={key}>{item}</Label>
                      ))
                    }
                  </div>
                  <br />
                  <Label.Group tag color='black'>
                    { this.props.price.min ? <Label as='a'>{this.props.price.min}DT</Label> : null }
                    { this.props.price.max ? <Label as='a'>{this.props.price.max}DT</Label> : null }
                  </Label.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <div className='ui three buttons'>
              {/* <Button basic color={this.state.ordred ? "red" : "blue"} animated='fade' onClick={this.handleClickOrder}>
                <Button.Content hidden>{this.state.ordred ? "Remove From Card" : "Add To Card"}</Button.Content>
                <Button.Content visible>
                  <Icon name='shop' />
                </Button.Content>
              </Button> */}
              { this.state.ordred ? <ButtonAddToCard btnColor='red' btnText="Remove From Card" handleClickOrder={this.handleClickOrder} /> : null}
              { this.state.ordred ? null : <ButtonAddToCard btnColor='blue' btnText="Add To Card"  handleClickOrder={this.handleClickOrder} />}
              <Button basic color={this.state.inFavorite ? "red" : "blue"} animated='fade' onClick={this.handleClickfavorite}>
                <Button.Content hidden>{this.state.inFavorite ? "Remove From Favorite" : "Add To Favorite"}</Button.Content>
                <Button.Content visible>
                  <Icon name='favorite' />
                </Button.Content>
              </Button>
              <Button basic color='blue' animated='fade'>
                <Button.Content hidden>Open</Button.Content>
                <Button.Content visible>
                  <Icon name='plus circle' />
                </Button.Content>
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default ItemComponent;
