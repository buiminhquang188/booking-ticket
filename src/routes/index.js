import CinemaDetail from "containers/client/CinemaDetail/CinemaDetail";
import FilmDetail from "containers/client/FilmDetail/FilmDetail";
import Home from "containers/client/Home/Home";
import SeatDetail from "containers/client/Home/SeatDetail/SeatDetail";

export const clientRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/chitietcumrap/:maCumRap',
        component: CinemaDetail,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/chitietphim/:maPhim',
        component: FilmDetail,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/chitietphongve/:maLichChieu',
        component: SeatDetail,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/thongtincanhan',
        component: SeatDetail,
        exact: true,
        isPrivate: true,
    },
]

export const adminRoutes = [
    {
        path: '/admin/quanlyphim',
        component: SeatDetail,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/quanlynguoidung/index',
        component: SeatDetail,
        exact: true,
        isPrivate: true,
    },
]