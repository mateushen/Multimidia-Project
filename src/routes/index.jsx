import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import SaiyanSaga from '../pages/dbz/saiyansaga';
import FriezaSaga from '../pages/dbz/friezasaga';
import AndroidSaga from '../pages/dbz/androidsaga';
import CellSaga from '../pages/dbz/cellsaga';
import MajinBooSaga from '../pages/dbz/majinboosaga';
import DragonBallZ from '../pages/dbz';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/dragonballz" element={<DragonBallZ />}>
                <Route path="saiyajins" element={<SaiyanSaga />} />
                <Route path="frieza" element={<FriezaSaga />} />
                <Route path="androids" element={<AndroidSaga />} />
                <Route path="cell" element={<CellSaga />} />
                <Route path="majinboo" element={<MajinBooSaga />} />
            </Route>

        </Routes>
    )
}
