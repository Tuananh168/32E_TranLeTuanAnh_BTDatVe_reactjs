import React, { Component } from "react";
import data from "./danhSachGhe.json";
import "./BaiTapBookingTicket.css";
import RenderHangGhe from "./RenderHangGhe";
import { connect } from "react-redux";

class BookingTicket extends Component {
  RenderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return (
        <div key={index}>
          <RenderHangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          backgroundImage: "url('./images/bgmovie.jpg')",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            position: "fixed",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-7">
                <div
                  className="bookingMovie text-warning text-center mt-2"
                  style={{ fontSize: 30 }}
                >
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>

                <div className="d-flex flex-column align-items-center">
                  <h3
                    className="text-light text-center"
                    style={{ fontSize: 15 }}
                  >
                    Màn hình
                  </h3>
                  <div className="screen mt-1"></div>
                </div>
                {this.RenderHangGhe()}
              </div>
              <div className="col-5">
                <div
                  className="text-light fw-bolder text-center my-5"
                  style={{ fontSize: 30 }}
                >
                  Danh Sách Ghế Bạn Chọn
                </div>
                <div className="d-flex justify-content-row">
                  <div className="gheDuocChon"></div>
                  <h4 className="text-light fs-3 mx-2">Ghế đã đặt</h4>
                </div>
                <div className="d-flex justify-content-row">
                  <div className="gheDangChon"></div>
                  <h4 className="text-light fs-3 mx-2">Ghế đang chọn</h4>
                </div>
                <div className="d-flex justify-content-row">
                  <div className="ghe" style={{ marginLeft: 0 }}></div>
                  <h4 className="text-light fs-3 mx-2">Ghế chưa đặt</h4>
                </div>

                <table className="table" style={{ border: "1px solid white" }}>
                  <thead>
                    <tr>
                      <th
                        className="text-light"
                        style={{ border: "1px solid white" }}
                      >
                        Số Ghế
                      </th>
                      <th
                        className="text-light"
                        style={{ border: "1px solid white" }}
                      >
                        Giá
                      </th>
                      <th
                        className="text-light"
                        style={{ border: "1px solid white" }}
                      >
                        Hủy
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.DanhSachGheDat.map((gheDangDat, index) => {
                      return (
                        <tr className="text-light" key={index}>
                          <td style={{ border: "1px solid white" }}>
                            {gheDangDat.soGhe}
                          </td>
                          <td style={{ border: "1px solid white" }}>
                            {gheDangDat.gia}
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                this.props.dispatch({
                                  type: "HUY_GHE",
                                  payload: gheDangDat.soGhe,
                                })
                              }
                              className="btn btn-danger"
                            >
                              <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot className="text-light">
                    <tr>
                      <td style={{ border: "1px solid white" }}>Tổng Tiền</td>
                      <td colSpan={2}>
                        {this.props.DanhSachGheDat.reduce(
                          (tongTien, gheDangDat, index) => {
                            return (tongTien += gheDangDat.gia);
                          },
                          0
                        ).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    DanhSachGheDat: rootReducer.BookingTicket.DanhSachGheDat,
  };
};

// const dispatchToProps = (dispatch) => {
//   return {
//     DelBooking: (gheDangDat) => {
//       dispatch({
//         type: "HUY_VE",
//         payload: gheDangDat.soGhe,
//       });
//     },
//   };
// };

export default connect(mapStateToProps)(BookingTicket);
