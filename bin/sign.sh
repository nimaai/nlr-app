#!bin/bash

# taken from http://developer.android.com/tools/publishing/app-signing.html#signing-manually

# Sign your app with your private key using jarsigner:

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore nitya-lila.keystore nitya-lila.apk nitya-lila

# This example prompts you for passwords for the keystore and key. It then modifies the APK in-place to sign it. Note that you can sign an APK multiple times with different keys.

# Verify that your APK is signed. For example:

jarsigner -verify -verbose -certs nitya-lila.apk

# Align the final APK package using zipalign.

zipalign -v 4 nitya-lila-unaligned.apk nitya-lila.apk

# zipalign ensures that all uncompressed data starts with a particular byte alignment relative to the start of the file, which reduces the amount of RAM consumed by an app.
