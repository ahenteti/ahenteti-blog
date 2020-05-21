#!/usr/bin/env bash

# exit when any command fails
set -e

export PGPASSWORD=$AHENTETI_BLOG_DATASOURCE_PASSWORD;
psql -U $AHENTETI_BLOG_DATASOURCE_USERNAME -c "
  SELECT pg_terminate_backend(pg_stat_activity.pid)
  FROM pg_stat_activity
  WHERE pg_stat_activity.datname = 'ahenteti-blog'
";
psql -U $AHENTETI_BLOG_DATASOURCE_USERNAME -c "DROP DATABASE IF EXISTS \"ahenteti-blog\"";
psql -U $AHENTETI_BLOG_DATASOURCE_USERNAME -c "CREATE DATABASE \"ahenteti-blog\"";