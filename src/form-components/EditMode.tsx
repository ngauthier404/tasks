import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-toggle"
                label="Edit Mode"
                checked={editing}
                onChange={(e) => setEditing(e.target.checked)}
            />
            {!editing ? (
                <div>
                    {name + " is" + (student ? "" : " not") + " a student"}
                </div>
            ) : (
                <div>
                    <Form.Control
                        type="textbox"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!editing}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Is Student"
                        checked={student}
                        disabled={!editing}
                        onChange={(e) => setStudent(e.target.checked)}
                    />
                </div>
            )}
        </div>
    );
}
