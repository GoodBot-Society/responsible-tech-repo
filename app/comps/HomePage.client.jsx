'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Hero from '../../components/home-page-ui/Hero';
import Search from "../../components/home-page-ui/Search";
import CategoryTab from "../../components/home-page-ui/CategoryTab";
import SubCategoryTab from "../../components/home-page-ui/SubCategoryTab";
import OrganizationCardList from "../../components/home-page-ui/OrganizationCardList";
import TopVoiceCardList from "../../components/home-page-ui/TopVoiceCardList";
import HomePageSkeletonLoading from "./HomePageSkeletonLoading.client";
import DataMissingCard from "@/components/home-page-ui/DataMissingCard";



const HomePageClient = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const API_URL = process.env.NEXT_PUBLIC_GOODBOT_API_URL
    const [homePageData, setHomePageData] = useState({})
    const [categoryTabs, setCategoryTabs] = useState([])
    const [currentTab, setCurrentTab] = useState([])
    const [subCategoryTabs, setSubCategoryTabs] = useState([])
    const [currentSubCategory, setCurrentSubCategory] = useState([])
    const [nonProfitsData, setNonProfitsData] = useState([])
    const [topVoicesData, setTopVoicesData] = useState([])

    useEffect(() => {
        if (API_URL) {
            axios.get(`${API_URL}/v1/home/`).then(response => {
                setHomePageData(response.data)
                setCategoryTabs(response.data.subfactors)
                setCurrentTab(response.data.subfactors[0])
                setSubCategoryTabs(response.data.subfactors[0].harms_and_risks)
                setCurrentSubCategory(response.data.subfactors[0].harms_and_risks[0])
                setNonProfitsData(response.data.subfactors[0].harms_and_risks[0].nonprofits)
                setTopVoicesData(response.data.subfactors[0].harms_and_risks[0].experts)
            })
        }
    }, [API_URL])

    const handleCategoryChange = (index) => {
        const selected = categoryTabs[index];
        setCurrentTab(selected);
        setSubCategoryTabs(selected?.harms_and_risks || []);
        setCurrentSubCategory(selected.harms_and_risks[0])
        setNonProfitsData(selected.harms_and_risks[0].nonprofits)
        setTopVoicesData(selected.harms_and_risks[0].experts)
    };

    const handleSubCategoryChange = (index) => {
        const selected = subCategoryTabs[index]
        setCurrentSubCategory(selected)
        setNonProfitsData(selected.nonprofits)
        setTopVoicesData(selected.experts)
    }

    const handleSearchSubmit = () => {
        if (!searchTerm) return;
        router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }


    return (
        homePageData && Object.keys(homePageData).length === 0 ? (
            <HomePageSkeletonLoading />
        ) : (
            <section className="container relative flex flex-col gap-10">
                <Hero />
                <Search onSubmit={handleSearchSubmit} value={searchTerm} onChange={setSearchTerm} />
                <hr />
                <section className="flex flex-col gap-10">
                    <div className="grid grid-cols-6 gap-4">
                        {categoryTabs && (
                            categoryTabs.map((category, index) => (
                                <CategoryTab data={category} key={category.id} onClick={() => handleCategoryChange(index)} isSelected={currentTab?.id === category.id} />
                            ))
                        )}
                    </div>
                    <div className="flex gap-x-4 overflow-auto subcategory-tab-container">
                        {subCategoryTabs.map((subCategory, index) => (
                            <SubCategoryTab key={subCategory.id} label={subCategory.name} onClick={() => handleSubCategoryChange(index)} isSelected={currentSubCategory?.id === subCategory.id} />
                        ))}
                    </div>

                    {!nonProfitsData && !topVoicesData ? (<DataMissingCard title="Community Resources" />) : (
                        <div className="flex flex-col gap-10 items-start w-full py-10 px-8 bg-goodbot-background rounded-3xl font-poppins">
                            <h2 className="font-bold text-2xl text-goodbot-primary tracking-wide">Community Resources</h2>
                            <OrganizationCardList data={nonProfitsData} />
                            <TopVoiceCardList data={topVoicesData} />
                        </div>
                    )}
                </section>
                <DataMissingCard title="Legislation, Past and Present" />
                <DataMissingCard title="Legal Processes" />
                <DataMissingCard title="Resources" />
            </section>
        )
    )
}

export default HomePageClient;