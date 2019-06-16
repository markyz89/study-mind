<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4T8lu4LuGjEyAlMo4NWA5nYJI2ViMuIuGVfIIIMhAGXpABryALtBTK8fK8IBKOF0fwZfUQosZSnZwiV2c3+x8Q==');
define('SECURE_AUTH_KEY',  '4Lkhu9H0t4806U8Dz9jdbxhibYU8rHMfSCmFKIHqGWYvnVSNv06jaJPxvwgTB67l1/ckgmfIccIwIlU1RpNnyQ==');
define('LOGGED_IN_KEY',    'ouOr2U5Y25JiKAExyE0beNci7OwQ/dybxBO3gR8dQi25aiWv2jBvI6wGmb0xjfaYBIx5Tt0MRGMBgLgRSaV0bg==');
define('NONCE_KEY',        'jgSqgUfpmi+Je045o56X/EZgA9jLshwSO7qRmYlgvqKnd+n3ObE2CITQbaeQLMJdKPu+ohADg69uI0LMFWCpZw==');
define('AUTH_SALT',        'JzDuJq+i9kgmFsgP+0EtSTfSYTtjTHAllvdXtFhT/lEJixg72suO0zeS5OoFz8xNg20+gEmd3CkqNa3qhD3vhg==');
define('SECURE_AUTH_SALT', 'Hno/GSXZQZDEIsV4r2wNOrWaqn3pNmLtvifjlSGjujy8C0/yMOWrXQxqm6zsenAzhFdcXE/qKXGyvZHYFTCLBQ==');
define('LOGGED_IN_SALT',   'kK0lBIGklyYm+cQzHSqj6tt5Vqx/upEyXNajCnu9cCB5dpfEzp3P80o/y0dAHFFwMTk9KNHXQh+GSFEL/pZrZQ==');
define('NONCE_SALT',       'A7ybwwDHG7TCq9yj3VdcdLf4wzAqdA6HpxBt5Lx3kGSB+li+vzdKU6qE+O0alWolcJQ68KcaxmHrG6ZkxapkIQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
