/* eslint-disable import/prefer-default-export */
// https://www.youtube.com/watch?v=Jkj_XP80h1k&index=7&list=PLcCp4mjO-z9_4Wak3Uq8dEWC6H1fbSNgL
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Notfound } from './NotFound';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../Components/Dashboard/Dashboard';
import DashBoardHeader from '../Components/Dashboard/DashboardHeader';

export const ProtectedRoutes = () => {
	return (
		<div>
			<DashBoardHeader.containers.DashboardHeaderContainer />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<div className="content">
							<Notfound />
						</div>
					)}
				/>
				<PrivateRoute path="/dashboard" component={Dashboard.components.Dashboard} />
			</Switch>
		</div>
	);
};
