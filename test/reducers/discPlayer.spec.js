import discPlayer from '../../app/reducers/discPlayer';
import {
  DISC_START_SPIN,
  DISC_STOP_SPIN,
  ROD_ON,
  ROD_OFF
} from '../../app/actions/discPlayer';

describe('reducers', () => {
  describe('discPlayer', () => {
    it('should handle initial state', () => {
      expect(discPlayer(undefined, {})).toMatchSnapshot();
    });

    it('should handle DISC_START_SPIN', () => {
      expect(
        discPlayer({ isDiscSpinning: false }, { type: DISC_START_SPIN })
      ).toMatchSnapshot();
    });

    it('should handle DISC_STOP_SPIN', () => {
      expect(
        discPlayer({ isDiscSpinning: true }, { type: DISC_STOP_SPIN })
      ).toMatchSnapshot();
    });

    it('should handle ROD_ON', () => {
      expect(
        discPlayer({ isRodOn: false }, { type: ROD_ON })
      ).toMatchSnapshot();
    });

    it('should handle ROD_OFF', () => {
      expect(
        discPlayer({ isRodOn: true }, { type: ROD_OFF })
      ).toMatchSnapshot();
    });

    it('should handle unknown action type', () => {
      expect(
        discPlayer(
          { isDiscSpinning: false, isRodOn: false },
          { type: 'unknown' }
        )
      ).toMatchSnapshot();
    });
  });
});
