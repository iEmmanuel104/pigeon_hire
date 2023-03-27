import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileAlt, faUsers, faHandshake, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import SearchBox from '../SearchBox/SearchBox';
import UserDetailModal from '../Modal/UserModal';
// import PromoterDetailModal from '../Modal/PromoterModal';
// import BrandDetailModal from '../Modal/BrandModal';
import CampaignDetailModal from '../Modal/CampaignModal';

const Sidebar = ({ campaigns, users, promoters, brands }) => {
    const [searchType, setSearchType] = useState('users');
    const [searchResults, setSearchResults] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedResult, setSelectedResult] = useState(null);

    const handleSearch = (searchResult) => {
        // console.log(`Searched for ${searchResult.searchQuery} under ${searchType}:`);
        setSearchResults(searchResult.searchResults);
    };

    const handleModalOpen = (result) => {
        setSelectedResult(result);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    let searchBoxSearchType = '';
    switch (searchType) {
        case 'campaigns':
            searchBoxSearchType = 'type';
            break;
        case 'users':
            searchBoxSearchType = 'email';
            break;
        case 'promoters':
            searchBoxSearchType = 'promoter';
            break;
        case 'brands':
            searchBoxSearchType = 'brand';
            break;
        default:
            searchBoxSearchType = '';
    }

    return (
        <>
            <div className="sidebar-menu">
                <ul className='menu-list'>
                    <li>
                        <Link to='/dashboard'>
                            <FontAwesomeIcon className='font-icon' icon={faChartBar} />
                            <h2>Dashboard</h2>
                        </Link>
                    </li>
                    <li className={activeItem === 'users' ? 'active' : ''} onClick={() => {
                        setSearchType('users');
                        setActiveItem('users')
                        setSearchResults([]);
                    }}>
                        <FontAwesomeIcon className='font-icon' icon={faUsers} />
                        <h2>Users</h2>
                    </li>
                    <li className={activeItem === 'campaigns' ? 'active' : ''} onClick={() => {
                        setSearchType('campaigns');
                        setActiveItem('campaigns');
                        setSearchResults([]);
                    }}>
                        <FontAwesomeIcon className='font-icon' icon={faFileAlt} />
                        <h2>Campaigns</h2>
                    </li>
                    <li className={activeItem === 'promoters' ? 'active' : ''} onClick={() => {
                        setSearchType('promoters');
                        setActiveItem('promoters');
                        setSearchResults([]);
                    }}>
                        <FontAwesomeIcon className='font-icon' icon={faHandshake} />
                        <h2>Promoters</h2>
                    </li>
                    <li className={activeItem === 'brands' ? 'active' : ''} onClick={() => {
                        setSearchType('brands');
                        setActiveItem('brands');
                        setSearchResults([]);
                    }}>
                        <FontAwesomeIcon className='font-icon' icon={faBriefcase} />
                        <h2>Brands</h2>
                    </li>
                </ul>
                <div className="sidebar-view">
                    <SearchBox
                        searchObjects={
                            searchType === 'campaigns'
                                ? campaigns
                                : searchType === 'users'
                                    ? users
                                    : searchType === 'promoters'
                                        ? promoters
                                        : searchType === 'brands'
                                            ? brands
                                            : []
                        }
                        onSearch={handleSearch}
                        searchType={searchBoxSearchType}
                    />
                    <div className="results-view">
                        {searchResults.map((result) => {
                            return (
                                <div className="result-data" key={result._id} onClick={() => handleModalOpen(result)}>
                                    {searchType === 'users' ? (
                                        <>
                                            <div className="result-name">{result.fullname}</div>
                                            <div className="result-email">{result.email}</div>
                                        </>
                                    ) : searchType === 'campaigns' ? (
                                        <>
                                            <div className="result-name">{result.name}</div>
                                            <div className="result-type">{result.type}</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="result-name">{result.name}</div>
                                            <div className="result-email">{result.email}</div>
                                        </>
                                    )}
                                    <div className="result-actions">
                                        <button className="view-button">View</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            <div className="sidebar-modal">
                {selectedResult && (
                    searchType === 'users' ? (    
                        <UserDetailModal
                            show={showModal}
                            onHide={handleModalClose}
                            user={selectedResult}
                        />
                    ) : searchType === 'campaigns' ? (
                        <CampaignDetailModal
                            show={showModal}
                            onHide={handleModalClose}
                            campaign={selectedResult}
                        />
                    ) : 
                    
                    // searchType === 'promoters' ? (
                    //     <PromoterDetailModal
                    //         show={showModal}
                    //         onHide={handleModalClose}
                    //         promoter={selectedResult}
                    //     />
                    // ) : searchType === 'brands' ? (
                    //     <BrandDetailModal
                    //         show={showModal}
                    //         onHide={handleModalClose}
                    //         brand={selectedResult}
                    //     />
                    // ) :
                     null
                )}
            </div>
        </>
    );
};

Sidebar.propTypes = {
    campaigns: PropTypes.array,
    users: PropTypes.array,
    promoters: PropTypes.array,
    brands: PropTypes.array,
};

export default Sidebar;
