/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { fetchHistory } from '../../redux/slices/historySlice';
import Loader from '../loader/Loader';
import Graph from './Graph';

const container = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
    transition: {
      duration: 2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const Chart = ({ id }) => {
  const { loading, entities: list, status } = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const callDispatch = () => {
    dispatch(fetchHistory(id));
  };

  return (
    <div>
      <AnimateSharedLayout>
        <Loader
          callDispatch={callDispatch}
          loading={loading}
          list={list}
          reload
          status={status}
          position="10%"
        >
          <motion.div
            variants={container}
            initial="initial"
            animate="animate"
          >
            <Graph list={list} />
          </motion.div>
        </Loader>
      </AnimateSharedLayout>
    </div>
  );
};

export default Chart;
