import * as React from 'react';
import styles from '../PropertyFieldCollectionDataHost.module.scss';
import { ICollectionIconFieldProps } from '.';
import { TextField } from 'office-ui-fabric-react/lib/components/TextField';
import { Icon } from 'office-ui-fabric-react/lib/components/Icon';

export class CollectionIconField extends React.Component<ICollectionIconFieldProps, {}> {

  public render(): React.ReactElement<ICollectionIconFieldProps> {
    const { field, item } = this.props;
    return (
      <div className={styles.iconField}>
        <TextField placeholder={field.placeholder || field.title}
                   className={styles.collectionDataField}
                   value={item[field.id] ? item[field.id] : ""}
                   required={field.required}
                   onChanged={(value) => this.props.fOnValueChange(field.id, value)}
                   deferredValidationTime={field.deferredValidationTime || field.deferredValidationTime >= 0 ? field.deferredValidationTime : 200}
                   onGetErrorMessage={(value) => this.props.fValidation(this.props.field, value)} />
        <Icon iconName={item[field.id] ? item[field.id] : ""} />
      </div>
    );
  }
}
