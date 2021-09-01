import {settlements, showdowns} from '@mocks';
import {SettlementScreenDocument} from './settlement-screen.generated';

const mockSettlementScreenDocument = {
  request: {
    query: SettlementScreenDocument,
    variables: {
      settlementId: settlements[0].id,
    },
  },
  result: {
    data: {
      settlement: {
        showdowns,
      },
    },
  },
};

export const mocks = [mockSettlementScreenDocument];
