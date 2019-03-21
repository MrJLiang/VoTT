import React from "react";
import { ITag } from "../../../../models/applicationState";
import "./tagInput.scss";

export interface ITagInputToolbarProps {
    selectedTag: ITag;
    onLockTag: (tag: ITag) => void;
    onEditTag: (tag: ITag) => void;
    onDelete: (tag: ITag) => void;
    onReorder: (tag: ITag, displacement: number) => void;
}

export default class TagInputToolbar extends React.Component<ITagInputToolbarProps> {
    render() {
        return (
            <div className="tag-input-toolbar">
                <div className="tag-input-toolbar-item" onClick={this.handleLock}>
                    <i className="tag-input-toolbar-icon fas fa-lock" />
                </div>
                <div className="tag-input-toolbar-item" onClick={this.handleEdit}>
                    <i className="tag-input-toolbar-icon fas fa-edit"/>
                </div>
                <div className="tag-input-toolbar-item" onClick={this.handleArrowUp}>
                    <i className="tag-input-toolbar-icon fas fa-arrow-circle-up"/>
                </div>
                <div className="tag-input-toolbar-item" onClick={this.handleArrowDown}>
                    <i className="tag-input-toolbar-icon fas fa-arrow-circle-down"/>
                </div>
                <div className="tag-input-toolbar-item" onClick={this.handleDelete}>
                    <i className="tag-input-toolbar-icon fas fa-trash"/>
                </div>
            </div>
        );
    }
    private handleLock = () => {
        this.props.onLockTag(this.props.selectedTag);
    }
    
    private handleEdit = () => {
        this.props.onEditTag(this.props.selectedTag);
    }
    
    private handleArrowUp = () => {
        this.props.onReorder(this.props.selectedTag, -1);
    }
    
    private handleArrowDown = () => {
        this.props.onReorder(this.props.selectedTag, 1);
    }
    
    private handleDelete = () => {
        this.props.onDelete(this.props.selectedTag);
    }
}


