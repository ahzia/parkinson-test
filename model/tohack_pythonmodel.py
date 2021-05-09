# -*- coding: utf-8 -*-
"""TOHack_PythonModel

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1tsboT6tcrWKMHZWZ3Pv6M08girZrat6z
"""

import matplotlib.pyplot as plt
import tensorflow as tf
import numpy as np
import os

from PIL import Image
from tensorflow import keras
from tensorflow.keras import layers

!unzip archive.zip

seed = 42
shuffle = True
inp_shp = (224, 224)
train_batch_size, val_batch_size = 16, 64

train_datagen = keras.preprocessing.image.ImageDataGenerator(
                    rescale=1./255,
                    horizontal_flip=True
)

val_datagen = keras.preprocessing.image.ImageDataGenerator(rescale=1./255)

spiral_train_generator = train_datagen.flow_from_directory(
        os.path.join(os.getcwd(),  'spiral', 'training'),
        target_size=inp_shp,
        batch_size=train_batch_size,
        seed=seed,
        class_mode='categorical',
        color_mode='rgb',
        shuffle=shuffle
)

spiral_val_generator = val_datagen.flow_from_directory(
        os.path.join(os.getcwd(),  'spiral', 'testing'),
        target_size=inp_shp,
        batch_size=val_batch_size,
        seed=seed,
        class_mode='categorical',
        color_mode='rgb',
        shuffle=shuffle
)

wave_train_generator = train_datagen.flow_from_directory(
        os.path.join(os.getcwd(),  'wave', 'training'),
        target_size=inp_shp,
        batch_size=train_batch_size,
        seed=seed,
        class_mode='categorical',
        color_mode='rgb',
        shuffle=shuffle
)

wave_val_generator = val_datagen.flow_from_directory(
        os.path.join(os.getcwd(),  'wave', 'testing'),
        target_size=inp_shp,
        batch_size=val_batch_size,
        seed=seed,
        class_mode='categorical',
        color_mode='rgb',
        shuffle=shuffle
)

wave_val_generator.class_indices

mobilenet = keras.applications.MobileNetV2(
    input_shape=(224, 224, 3),
    alpha=1.0,
    include_top=False,
    weights="imagenet"
)
mobilenet.trainable = False
mobilenet.summary()

def get_model(base_model, name):
  inputs = keras.Input((224, 224, 3))

  x = base_model(inputs, training=False)

  x = layers.Conv2D(128, (3, 3), activation=None)(x)
  x = layers.MaxPool2D(pool_size=(2, 2))(x)
  x = layers.LeakyReLU(alpha=0.1)(x)

  x = layers.Flatten()(x)

  x = layers.Dense(units=128, activation=None)(x)
  x = layers.LeakyReLU(alpha=0.1)(x)

  outputs = layers.Dense(units=2, activation='softmax')(x)

  model = keras.Model(inputs=inputs, outputs=outputs, name=name)

  return model

checkpoint_cb1 = keras.callbacks.ModelCheckpoint(
    f"spiral_model.h5", save_best_only=True
)

checkpoint_cb2 = keras.callbacks.ModelCheckpoint(
    f"wave_model.h5", save_best_only=True
)

epochs = 8

spiral_model = get_model(mobilenet, 'Spiral')
spiral_model.summary()

spiral_model.compile(
    loss="categorical_crossentropy",
    optimizer=keras.optimizers.RMSprop(learning_rate=1e-4),
    metrics=["accuracy"],
)

spiral_history = spiral_model.fit(
            spiral_train_generator,
            epochs=epochs,
            validation_data=spiral_val_generator,
#             validation_steps=29,
            shuffle=False,
            callbacks=[checkpoint_cb1]
)

wave_model = get_model(mobilenet, 'Wave')
wave_model.summary()

wave_history = wave_model.compile(
    loss="categorical_crossentropy",
    optimizer=keras.optimizers.RMSprop(learning_rate=1e-4),
    metrics=["accuracy"]
)

wave_history = wave_model.fit(
            wave_train_generator,
            epochs=epochs,
            validation_data=wave_val_generator,
#             validation_steps=29,
            shuffle=False,
            callbacks=[checkpoint_cb2]
)

# Commented out IPython magic to ensure Python compatibility.
# %matplotlib inline

fig = plt.Figure(figsize=(12, 12), dpi=200)

ax1 = fig.add_subplot(2, 2, 1)
ax1.plot(range(1, epochs+1), spiral_history.history['loss'], marker='o', c='r', label='Spiral Train Loss')
ax1.plot(range(1, epochs+1), spiral_history.history['val_loss'], marker='o', c='g', label='Spiral Test Loss')
leg1 = ax1.legend(loc=1)

ax2 = fig.add_subplot(2, 2, 2)
ax2.plot(spiral_history.history['accuracy'], marker='o', label='Spiral Train Accuracy')
ax2.plot(spiral_history.history['val_accuracy'], marker='o', label='Spiral Test Accuracy')
leg2 = ax2.legend(loc=4)

ax3 = fig.add_subplot(2, 2, 3)
ax3.plot(wave_history.history['loss'], marker='o', c='r', label='Wave Train Loss')
ax3.plot(wave_history.history['val_loss'], marker='o', c='g', label='Wave Test Loss')
leg3 = ax3.legend(loc=1)

ax4 = fig.add_subplot(2, 2, 4)
ax4.plot(wave_history.history['accuracy'], marker='o', label='Wave Train Accuracy')
ax4.plot(wave_history.history['val_accuracy'], marker='o', label='Wave Test Accuracy')
leg4 = ax4.legend(loc=4)

fig.savefig('Plots.png')