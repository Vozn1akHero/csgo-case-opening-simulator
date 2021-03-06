import React, { Component } from "react";
import { GreenButton } from "../GreenButton/GreenButton";
import styles from "./ReceivedItemModal.module.scss";
import { SettingsContext } from "../../contexts/SettingsContext";
import { itemType } from "../../helpers/item-type";

export default class ReceivedItemModal extends Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.caseOpeningAudioBaseDrop = React.createRef();
    this.caseOpeningAudioBlueDrop = React.createRef();
    this.caseOpeningAudioPurpleDrop = React.createRef();
    this.caseOpeningAudioPinkDrop = React.createRef();
    this.caseOpeningAudioRedDrop = React.createRef();

    switch (this.props.type) {
      case itemType.GREY:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_consumerGrade,
        };

        break;
      case itemType.LIGHTBLUE:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_lightBlue,
        };

        break;
      case itemType.BLUE:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_blue,
        };

        break;
      case itemType.PURPLE:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_purple,
        };

        break;
      case itemType.PINK:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_pink,
        };

        break;
      case itemType.RED:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_red,
        };

        break;
      case itemType.GOLD:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_special,
        };

        break;
      case itemType.GREY | itemType.LIGHTBLUE:
        this.state = {
          receivedItemModalBgClass: styles.receivedItemModal_consumerGrade,
        };

      default:
        break;
    }
  }

  componentDidMount() {
    this.caseOpeningAudioBaseDrop.current.volume = this.context.volume;
    this.caseOpeningAudioBlueDrop.current.volume = this.context.volume;
    this.caseOpeningAudioPurpleDrop.current.volume = this.context.volume;
    this.caseOpeningAudioPinkDrop.current.volume = this.context.volume;
    this.caseOpeningAudioRedDrop.current.volume = this.context.volume;

    switch (this.props.type) {
      case itemType.GREY:
      case itemType.LIGHTBLUE:
        this.caseOpeningAudioBaseDrop.current.play();
        break;
      case itemType.BLUE:
        this.caseOpeningAudioBlueDrop.current.play();
        break;
      case itemType.PURPLE:
        this.caseOpeningAudioPurpleDrop.current.play();
        break;
      case itemType.PINK:
        this.caseOpeningAudioPinkDrop.current.play();
        break;
      case itemType.RED:
        this.caseOpeningAudioRedDrop.current.play();
        break;
      case itemType.GOLD:
        this.caseOpeningAudioRedDrop.current.play();
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div
        className={`${styles.receivedItemModal} ${this.state.receivedItemModalBgClass}`}
      >
        <audio ref={this.caseOpeningAudioBaseDrop}>
          <source src='/sound/drop1.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.caseOpeningAudioBlueDrop}>
          <source src='/sound/drop2.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.caseOpeningAudioPurpleDrop}>
          <source src='/sound/drop3.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.caseOpeningAudioPinkDrop}>
          <source src='/sound/drop4.mp3' type='audio/mp3' />
        </audio>
        <audio ref={this.caseOpeningAudioRedDrop}>
          <source src='/sound/drop5.mp3' type='audio/mp3' />
        </audio>
        <h1 className={styles.itemTitle}>
          {this.props.isStatrak && "StatTrak™" + " "} {this.props.title}
        </h1>
        <div className={`${styles.imageWrap}`}>
          <img src={this.props.image} alt='' />
        </div>
        <div className={styles.bottomWrap}>
          <span>You got a new item!</span>
          <div className={styles.btnRowWrap}>
            <GreenButton
              onClick={() => {
                this.props.onSubmit();
              }}
              text='Continue'
            />
            <GreenButton
              onClick={() => {
                this.props.onTryAgainBtnClick();
              }}
              text='Try again'
            />
          </div>
        </div>
      </div>
    );
  }
}
