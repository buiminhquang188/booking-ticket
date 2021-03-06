import React, { Component } from "react";
import CinemaDetailList from "./CinemaDetailList/CinemaDetailList";
import movieApi from "apis/movieApi";
import Loader from "components/Loader/Loader";
export default class CinemaDetail extends Component {
  state = {
    cinemaInfo: [],
    maCumRap: null,
    maHeThongRap: null,
    loading: true,
  };
  componentDidMount() {
    const { maCumRap } = this.props.match.params;
    const { maHeThongRap } = this.props.location.state;
    movieApi
      .fetchDetailCinema(maHeThongRap)
      .then((res) => {
        this.setState({
          cinemaInfo: res.data,
          maHeThongRap: maHeThongRap,
          maCumRap: maCumRap,
          loading: false,
        });
      })
      .catch((err) => {
        alert(err);
      });
  }
  render() {
    const { loading, cinemaInfo, maCumRap, maHeThongRap } = this.state;
    if (loading) return <Loader />;
    return (
      <div>
        <CinemaDetailList
          cinemaInfo={cinemaInfo}
          maCumRap={maCumRap}
          maHeThongRap={maHeThongRap}
        />
      </div>
    );
  }
}
