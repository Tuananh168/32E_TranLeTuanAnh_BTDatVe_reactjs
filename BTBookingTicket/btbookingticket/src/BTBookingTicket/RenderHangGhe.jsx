import React, { Component } from "react";
import { connect } from "react-redux";
class RenderHangGhe extends Component {
  RenderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      console.log(this.props.DanhSachGheDat);
      const i = this.props.DanhSachGheDat.findIndex(
        (item) => item.soGhe === ghe.soGhe
      );
      if (i !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => this.props.datGhe(ghe)}
          disabled={disabled}
          style={{ fontWeight: "bolder" }}
          key={index}
          className={`ghe ${cssDaDat} ${cssGheDangDat}`}
        >
          {index + 1}
        </button>
      );
    });
  };

  RenderFirstRow = () => {
    return this.props.hangGhe.danhSachGhe.map((firstRow, index) => {
      return (
        <button className="rowNumber" key={index}>
          {firstRow.soGhe}
        </button>
      );
    });
  };

  RenderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div style={{ marginLeft: 30 }}>
          {this.props.hangGhe.hang}
          {this.RenderFirstRow()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.RenderGhe()}
        </div>
      );
    }
  };

  render() {
    // const { hangGhe } = this.props;
    return (
      <div style={{ fontSize: 30 }} className="text-light">
        {this.RenderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return { DanhSachGheDat: rootReducer.BookingTicket.DanhSachGheDat };
};

const dispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch({
        type: "DAT_GHE",
        payload: ghe,
      });
    },
  };
};

export default connect(mapStateToProps, dispatchToProps)(RenderHangGhe);
