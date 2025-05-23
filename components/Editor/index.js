'use client';

import ResumeFields from '@/config/ResumeFields';
import { FaSave } from 'react-icons/fa';
import SingleEditor from './SingleEditor';
import MultiEditor from './MultiEditor';
import { useDispatch } from 'react-redux';
import { saveResume } from '@/store/slices/resumeSlice';
import { useEffect } from 'react';

const Editor = ({ tab }) => {
    const { multiple } = ResumeFields[tab];
    const dispatch = useDispatch();

    const save = e => {
        e?.preventDefault();
        dispatch(saveResume());
    };

    useEffect(() => {
        const interval = setInterval(save, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <form onSubmit={save} className="card my-8">
                {multiple && <MultiEditor tab={tab} />}
                {!multiple && <SingleEditor tab={tab} />}

                <button 
                    type="submit" 
                    className="group ml-auto mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-4 py-2 text-sm font-medium text-gray-200 transition-all hover:border-green-500 hover:from-green-500/20 hover:to-emerald-500/20 hover:text-white md:w-auto"
                >
                    <span>Save Changes</span>
                    <FaSave className="transition-transform group-hover:scale-110" />
                </button>
            </form>
        </>
    );
};

export default Editor;
