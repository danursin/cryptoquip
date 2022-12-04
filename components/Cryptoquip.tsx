import { Form, Grid, Table, TextArea } from "semantic-ui-react";
import React, { CSSProperties, useState } from "react";

const initialPuzzleState = `KS XYE LWEBA NYWL YS LGHEKPL WY C UGPJWKP'L OYMX, QFCW QYENM WFG BYPLGHEGPBG OG? LUCVANKPJ QCMMNGV.`;
const fullMap: Record<string, string> = {
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: ""
};
const initialMap = { J: "G" };

const Cryptoquip: React.FC = () => {
    const [puzzle, setPuzzle] = useState<string>(initialPuzzleState);
    const [map, setMap] = useState<Record<string, string>>({ ...fullMap, ...initialMap });

    return (
        <>
            <Grid>
                <Grid.Column width={4}>
                    <div style={{ maxHeight: "90vh", overflowY: "auto" }}>
                        <Form size="mini">
                            <Table definition compact="very" basic>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell content="Letter" />
                                        <Table.HeaderCell content="Mapped Value" />
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {Object.entries(map).map(([letter, mappedValue]) => (
                                        <Table.Row key={letter}>
                                            <Table.Cell content={letter} />
                                            <Table.Cell>
                                                <Form.Input
                                                    type="text"
                                                    value={mappedValue}
                                                    maxLength="1"
                                                    onChange={(e, { value }) => setMap({ ...map, [letter]: value })}
                                                />
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </Form>
                    </div>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Form>
                        <Form.TextArea label="Puzzle Input" value={puzzle} onChange={(e, { value }) => setPuzzle(value as string)} />
                    </Form>

                    <label>Solved Puzzle</label>
                    <blockquote>
                        {puzzle.split("").map((letter, index) => {
                            const mappedValue = map[letter];
                            let style: CSSProperties = {};
                            let renderedValue = letter;
                            if (mappedValue) {
                                renderedValue = mappedValue;
                                style.fontWeight = "bold";
                                style.textDecoration = "underline";
                                style.color = "blue";
                            }
                            return (
                                <span key={index} style={style}>
                                    {renderedValue}
                                </span>
                            );
                        })}
                    </blockquote>
                </Grid.Column>
            </Grid>
        </>
    );
};

export default Cryptoquip;
