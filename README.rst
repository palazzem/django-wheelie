==============
Django Wheelie
==============

A simple integration of `Wheelie`_ for `Django`_!

Usage
-----

Go to ``frontend/`` folder and run:

.. code-block:: bash

    $ npm install

Then you can launch from this folder Wheelie simply:

.. code-block:: bash

    $ gulp

This will provide an automatic JavaScript concatenation among all files available in ``frontend/client/js/`` folder.
You will also have an automatic compiled SASS for all files available in ``frontend/client/scss/`` folder.

All files will be available in ``frontend/static/`` folder (Django can serve this folder in development mode). Your
``collectstatic`` configuration should reach this folder.

When you're app is ready, launch `Wheelie`_ in production mode using:

.. code-block:: bash

    $ gulp build --production

All JavaScript and CSS outputs are minified without any sourcemap. At this time you should commit all content available in
``frontend/static/`` folder.

.. _Wheelie: https://github.com/palazzem/wheelie
.. _Django: https://www.djangoproject.com/
