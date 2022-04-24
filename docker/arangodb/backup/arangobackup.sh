# Utility functions
get_log_date () {
    date +[%Y-%m-%d\ %H:%M:%S]
}
get_file_date () {
    date +%Y%m%d%H%M%S
}

# Validate needed ENV vars
if [ -z "$ARANGO_ENDPOINT" ]; then
    echo "$(get_log_date) ARANGO_ENDPOINT is unset or set to the empty string"
    exit 1
fi
if [ -z "$ARANGO_USER" ]; then
    echo "$(get_log_date) ARANGO_USER is unset or set to the empty string"
    exit 1
fi
if [ -z "$ARANGO_PASS" ]; then
    echo "$(get_log_date) ARANGO_PASS is unset or set to the empty string"
    exit 1
fi


# Path in which to create the backup (will get cleaned later)
BACKUP_PATH="/mnt/data/dump/"

# START
echo "$(get_log_date) arango backup started"

# Backup filename
BACKUP_FILENAME="$(get_file_date).tar.gz"

# Create the backup
echo "$(get_log_date) [Step 1/3] Running arangodump from $ARANGO_ENDPOINT to $BACKUP_PATH"
arangodump --server.endpoint $ARANGO_ENDPOINT --server.username $ARANGO_USER --server.password $ARANGO_PASS --all-databases true --output-directory $BACKUP_PATH

# Compress
echo "$(get_log_date) [Step 2/3] Creating tar file"
tar -czf $BACKUP_PATH$BACKUP_FILENAME $BACKUP_PATH*

cp $BACKUP_PATH$BACKUP_FILENAME /mnt/data/compressed_dumps/

# Clean
echo "Removing backup data"
rm -rf $BACKUP_PATH*

# FINISH
echo "$(get_log_date) backup finished"
