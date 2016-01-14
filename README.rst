==============
Django Wheelie
==============

A Django app template for an easy integration between `Wheelie`_ and `Django`_!

.. _Wheelie: https://github.com/palazzem/wheelie
.. _Django: https://www.djangoproject.com/

Requirements
------------

This template uses Wheelie as an assets processor. Because of that, the requirements are the
same of the Wheelie project:

* `Node.js`_ version ``5.0.0+``
* `Gulp`_
* `NPM`_ package manager
* `Bower`_ package manager (optional)

Missing any of the requirements above, means having a not working integration.

.. _Node.js: https://nodejs.org/
.. _NPM: https://www.npmjs.com/
.. _Bower: http://bower.io/
.. _Gulp: http://gulpjs.com/

Generate
--------

Go to your Django project root and launch the generation with:

.. code-block:: bash

    $ python manage.py startapp wheelie --template=https://github.com/palazzem/django-wheelie

Go in your application settings and add Wheelie to the ``INSTALLED_APPS`` list:

.. code-block:: python

    # app/settings.py

    INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',

        # ... other apps
        'wheelie',
    ]

Usage
-----

Go into the ``wheelie/`` folder and run the following command to install all project dependencies:

.. code-block:: bash

    $ npm install

After that, you can launch Gulp build via Wheelie using:

.. code-block:: bash

    $ gulp

Django statics
~~~~~~~~~~~~~~

Gulp provides an automatic JavaScript concatenation among all files available in the ``wheelie/client/js/`` folder.
You will also have an automatic compiled SASS for files present in the ``wheelie/client/scss/`` folder.

Gulp outputs the processed files in the ``wheelie/static/`` folder so that Django can serve the folder in development mode.
The Django ``collectstatic`` will target this folder during the process.

Building for production
-----------------------

When you're app is ready, launch Wheelie in production mode using:

.. code-block:: bash

    $ gulp build --production

JavaScript and CSS outputs are minified without any sourcemap. At this time you should commit the content available in
``wheelie/static/`` folder.
