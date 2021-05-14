import React, {Component} from 'react';
import styles from './styles.css';

export default class Upload extends Component {

    render() {
        return (
            <div className={styles.root}>
                <input
                    accept="image/*"
                    className={styles.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
            </div>
        );
    }
}
