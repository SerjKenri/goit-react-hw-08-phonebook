import { useSelector } from 'react-redux';
import * as selectors from 'redux/auth/selectors';

export const useAuth = () => ({
  isLoggedIn: useSelector(selectors.selectIsLoggedIn),
  isRefreshing: useSelector(selectors.selectIsRefreshing),
  user: useSelector(selectors.selectUser),
});
