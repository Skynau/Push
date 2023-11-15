import React, { useState, useContext } from "react";
import EmptyHeartIcon from "../../../../public/images/heart-empty.svg";
import HeartIcon from "../../../../public/images/heart-liked.svg";
import ShowInterestIcon from "../../../../public/images/show-interest.svg";
import Context from "../../Context";
import "./PropertyDetail.scss";

const PropertyDetail = () => {
    const [liked, setLiked] = useState(false);

    const { dispatch } = useContext(Context);

    const toggleLiked = () => {
        setLiked((prevValue) => !prevValue);
    };

    const hideModal = () => {
        dispatch({
            type: "TOGGLE_MODAL",
        });
    };

    return (
        <div className="property-container">
            <div className="property-container_modal">
                <div className="property-nav">
                    <div className="back-link" onClick={hideModal}>
                        {" "}
                        &larr; Back to search
                    </div>
                    <div className="nav-brand">PUSH!</div>
                    <div className="nav-links">
                        <div className="save" onClick={toggleLiked}>
                            <img
                                src={liked ? HeartIcon : EmptyHeartIcon}
                                alt="Heart"
                            />
                            <p>Save</p>
                        </div>
                        <div className="interest">
                            <img src={ShowInterestIcon} alt="Interest" />
                            <p>Inquire Interest</p>
                        </div>
                    </div>
                </div>
                <div className="propery-images">
                    <div className="main-image">
                        <img
                            src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                            alt="Image"
                        />
                    </div>
                    <div className="small-images">
                        <div className="image-col">
                            <img
                                src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                alt="Image"
                            />
                            <img
                                src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                alt="Image"
                            />
                        </div>
                        <div className="image-col">
                            <img
                                src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                alt="Image"
                            />
                            <img
                                src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601"
                                alt="Image"
                            />
                        </div>
                    </div>
                </div>
                <div className="property-stats">
                    <div className="stats-top">
                        <div className="price-street">
                            <h2 className="stats-price">$140,000</h2>
                            <p className="stats-street">
                                101 S Madison St, Hugoton, KS 67951
                            </p>
                        </div>
                        <div className="beds-baths">
                            <p>
                                <span className="beds">3</span>
                                <span>beds</span>
                            </p>
                            <p>
                                <span className="baths">20</span>
                                <span>baths</span>
                            </p>
                            <p>
                                <span className="size">1,368</span>
                                <span>size</span>
                            </p>
                        </div>
                    </div>
                    <div className="property-info">
                        <p>Available form</p>
                        <p>Listing Date</p>
                        <p>Pets Welcome</p>
                    </div>
                    <div className="property-description">
                        <h2>Description</h2>
                        <p>
                            voluptatibus, asperiores doloremque cum distinctio
                            sint sit iste ea quae voluptatum rerum doloribus
                            provident molestias adipisci dolore officia?
                            Consequuntur qui quibusdam iure dolore accusamus in
                            ea eligendi nesciunt impedit, rerum nam facilis
                            aperiam. Sit doloribus distinctio est voluptatibus,
                            maxime adipisci veritatis recusandae culpa ut
                            exercitationem autem, quas provident, nisi rem
                            tempora accusantium? Laborum, quia est? Quia vero
                            odio aliquid eum repellendus deleniti est ipsum?
                            Numquam commodi eligendi aspernatur rem, sapiente
                            iste, nam nisi optio mollitia a natus non facilis
                            maiores molestiae magni assumenda laborum iusto,
                            minima saepe? Itaque, omnis mollitia ipsum ea earum
                            consequatur aut inventore quos magni illo provident,
                            voluptatum suscipit ipsam laudantium temporibus
                            autem delectus quod cupiditate sunt dolorum dolor.
                            Illo molestiae error odit, iste quod quae sapiente
                            eligendi ducimus accusamus, iusto dicta unde ipsam
                            laborum necessitatibus? Nesciunt provident quidem
                            minus impedit quos quaerat sed unde laborum
                            doloremque, vero, velit, similique odio vitae at
                            asperiores est repellat vel praesentium quis
                            cupiditate expedita molestias? Vel dolor repudiandae
                            porro ut tempore officia, sequi ea pariatur vitae
                            distinctio maiores. Laudantium consequuntur
                            repellendus iste, dignissimos amet odit quibusdam
                            nesciunt provident distinctio nulla magni voluptate
                            voluptatibus quisquam facere assumenda nihil alias
                            culpa placeat! Deserunt distinctio fugit iste maxime
                            deleniti hic doloremque excepturi sed perspiciatis,
                            unde reiciendis nesciunt amet accusantium ducimus
                            rerum, esse vitae explicabo natus, quisquam
                            veritatis odio ad nemo placeat nihil. A, nobis
                            perspiciatis. Praesentium mollitia hic totam
                            blanditiis repudiandae ad provident sequi distinctio
                            tempora quibusdam unde, fugit, in necessitatibus
                            quam libero, aut odio tenetur laudantium. Eius
                            provident modi atque dolores vitae incidunt non
                            nihil porro magnam voluptatibus iste mollitia, velit
                            doloremque! Praesentium explicabo in iure. Veniam
                            quam totam perferendis provident et labore delectus?
                            Ipsam rerum ratione recusandae quam, expedita non,
                            placeat maiores doloribus pariatur doloremque
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
