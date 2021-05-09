import os

import numpy as np
import tensorflow as tf

class MyPredictor(object):
    def __init__(self, model):
        self._model = model
        self._classnames = {
            '0': 'Healthy',
            '1': 'Parkinson'
        }

    def predict(self, instances):
        inputs = np.asarray(instances)
        # preprocessed_inputs = self._preprocessor.preprocess(inputs)
        outputs = self._model.predict(inputs)
        return outputs.tolist()

    @classmethod
    def from_path(cls, model_dir):
        model_path = os.path.join(model_dir, 'model.h5')
        model = tf.keras.models.load_model(model_path)

        return cls(model)