import {showdowns} from '@mocks';
import {ShowdownScreenDocument} from './showdown-screen.generated';

const mockShowdownScreenDocument = {
  request: {
    query: ShowdownScreenDocument,
    variables: {
      showdownId: showdowns[0].id,
    },
  },
  result: {
    data: {
      showdown: showdowns[0],
    },
  },
};

export const mocks = [mockShowdownScreenDocument];
