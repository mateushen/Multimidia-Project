import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import SaiyanSaga from '../pages/saiyansaga';
import FreezaSaga from '../pages/freezasaga';
import AndroidSaga from '../pages/androidsaga';
import CellSaga from '../pages/cellsaga';
import MajinBooSaga from '../pages/majinboosaga';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/saiyajins" element={<SaiyanSaga/>} />
            <Route path="/freeza" element={<FreezaSaga/>} />
            <Route path="/androids" element={<AndroidSaga/>} />
            <Route path="/cell" element={<CellSaga/>} />
            <Route path="/majinboo" element={<MajinBooSaga/>} />
        </Routes>
    )
}