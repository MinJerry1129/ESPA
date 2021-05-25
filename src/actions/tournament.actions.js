import tournamentReducer from '@reducers/tournament.reducer';
import BaseActions from './base-actions';
import api from '@services/api/espa/api.service';
import { toast } from 'react-toastify';
import Router from 'next/router';

class TournamentActions extends BaseActions {
  registerTournamentInfo(tournamentInfo) {
    return async (dispatch) => {
      try {
        // dispatch(this.setValue('isLoading', true));
        const data = await api.registerTournament(tournamentInfo);
        if (data) {
          toast('Tournament has been registered successfully')
          Router.push('/playnow/21');
        } else {
          toast.error('Registering tournament has been failed.')
        }
      } catch (e) {
        console.log('toast should run!!')
        toast.error('Registering tournament has been failed.')
      }
      // dispatch(this.setValue('isLoading', false));
    };
  }
}

export default new TournamentActions(tournamentReducer);
